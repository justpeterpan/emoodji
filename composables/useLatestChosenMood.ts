import { useMood } from '~/stores/moods'
import { PickedMood } from '~/types'
export const useLatestChosenMood = async (userId: string | undefined) => {
  const client = useSupabaseClient()
  const { data, pending, refresh } = await useAsyncData(
    'pickedMoods',
    async () => {
      return await client
        .from<PickedMood>('pickedMood')
        .select(`created_at, description, moodId, emoodji(*)`)
        .eq('userId', userId)
        .order('created_at', { ascending: false })
        .limit(1)
    },
    {
      initialCache: false,
      // TODO refactor flat result object
      transform: (result) => result.data
    }
  )
  const today = new Date().toISOString().slice(0, 10)
  const todaysMood = data.value?.find((mood) => mood.created_at)
  if (today === todaysMood?.created_at?.slice(0, 10)) {
    useMood().setMood(true, todaysMood)
  } else {
    useMood().setMood(false, null)
  }
  return { data, pending, refresh }
}
