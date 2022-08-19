import { Mood } from '~/types'
export const useMoods = async (properties: string) => {
  const client = useSupabaseClient()
  const { data, pending } = await useAsyncData(
    'moods',
    async () => {
      return await client.from<Mood>('emoodji').select(properties)
    },
    { initialCache: false, transform: (result) => result.body }
  )
  return { data, pending }
}
