import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(1),
    age: z.number().min(18).max(120),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const initialRegisterInput: RegisterInput = {
    name: '',
    age: 18,
};
