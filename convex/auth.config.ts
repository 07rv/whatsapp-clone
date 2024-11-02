const authConfig = {
  providers: [
    {
      domain: process.env.CONVEX_JWT_URL,
      applicationID: "convex",
    },
  ],
};

export default authConfig;
