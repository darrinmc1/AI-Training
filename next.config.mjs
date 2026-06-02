/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Suppress "module not found" warning for optional packages that are
  // conditionally required at runtime but not listed in package.json.
  // @supabase/supabase-js is optional — feedback route works without it.
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : []),
        "@supabase/supabase-js",
      ]
    }
    return config
  },
}

export default nextConfig
