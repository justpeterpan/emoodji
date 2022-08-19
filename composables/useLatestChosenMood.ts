import { PickedMood } from '~/types'
export const useLatestChosenMood = async (userId: string | undefined) => {
  const client = useSupabaseClient()
  const { data, pending, refresh } = await useAsyncData(
    'pickedMoods',
    async () => {
      return await client
        .from<PickedMood>('pickedMood')
        .select(`created_at, description, emoodji(*)`)
        .eq('userId', userId)
        .order('created_at', { ascending: false })
        .limit(1)
    },
    { initialCache: false, transform: (result) => result.body }
  )

  return { data, pending, refresh }
}
