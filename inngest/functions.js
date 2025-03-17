import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  }
);


export const CreateNewUser=inngest.createFunction({
    {id: "create-user"},
    {event:"user.create"},

    async(
        {event, step}
    )=>{
//get event data
const result  =await step.run('Check User and create user if not in the database')
    }
})