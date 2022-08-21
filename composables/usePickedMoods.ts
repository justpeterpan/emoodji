import { PickedMood } from '~/types'
export const usePickedMoods = async (userId: string | undefined) => {
  const client = useSupabaseClient()
  const { data, pending } = await useAsyncData(
    'pickedMoods',
    async () => {
      return await client
        .from<PickedMood>('pickedMood')
        .select(`id, moodId, created_at, changed, description, emoodji(*)`)
        .eq('userId', userId)
        .order('created_at')
    },
    { initialCache: false, transform: (result) => result.body }
  )

  return { data, pending }
}
