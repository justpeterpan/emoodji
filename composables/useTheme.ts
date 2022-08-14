import { Theme } from '~/types/theme'
export const useTheme = async (key: string, table: string, theme: string) => {
  const client = useSupabaseClient()
  const { data, pending } = await useAsyncData(
    key,
    async () => {
      return await client.from<Theme>(table).select('name, config').eq('name', theme)
    },
    { initialCache: false, transform: (result) => result.body }
  )
  return { data, pending }
}
