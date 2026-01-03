import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "u9a6wmr3as.ufs.sh" },
      { hostname: "xilp8h6cg4.ufs.sh" },
    ],
  },

  /* Configuração de Redirecionamento --- */
  async redirects() {
    return [
      {
        source: "/", // Quando acessar a raiz
        destination: "/gmp-fastfoods", // Vai para a rota do seu projeto
        permanent: true, // Cacheia o redirecionamento
      },
    ];
  },
};

export default nextConfig;
