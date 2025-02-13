"use server";

import { getSession } from "@/utils/session";

export const fatchToken = async () => {
  const session = await getSession();
  if (!session && session.token) {
    return session.token;
  }
};



