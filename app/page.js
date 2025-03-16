import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="outline">Hello</Button>
      <h2 className="bg-green-700"> class====Hello</h2>

      <UserButton />
    </div>
  );
}
