import * as z from "zod";

//define validation schema
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2, { message: "Too short" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Too short" }),
});

//sign in
export const SigninValidation = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, { message: "Too short" }),
});

//custom post validation
export const PostValidation = z.object({
  caption: z.string().min(5).max(500),
  file: z.custom<File[]>(),
  location: z.string().min(2).max(100),
  tags: z.string(),
});
