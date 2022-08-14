export const useMoods = async (key: string, table: string, properties: string) => {
  interface Mood {
    name: string
    icon: string
  }

  const client = useSupabaseClient()
  const { data, pending } = await useAsyncData(
    key,
    async () => {
      return await client.from<Mood>(table).select(properties)
    },
    { initialCache: false, transform: (result) => result.body }
  )
  return { data, pending }
}
