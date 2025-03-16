"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import { USER_TABLE } from "./config/schema";
import { db } from "./config/db";
import { eq } from "drizzle-orm";

const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;

    const checkIsNewUser = async () => {
      try {
        // Check if the user already exists
        const result = await db
          .select()
          .from(USER_TABLE)
          .where(eq(USER_TABLE.email, user.primaryEmailAddress?.emailAddress));

        if (result.length === 0) {
          // Insert new user into the database
          const userResponse = await db
            .insert(USER_TABLE)
            .values({
              userName: user.fullName,
              email: user.primaryEmailAddress?.emailAddress,
            })
            .returning({ id: USER_TABLE.id });

          console.log("User registered:", userResponse);
        }
      } catch (error) {
        console.error("Error checking/inserting user:", error);
      }
    };

    checkIsNewUser();
  }, [user]);

  return <>{children}</>;
};

export default Provider;
