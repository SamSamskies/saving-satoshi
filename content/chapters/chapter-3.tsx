import { Chapter, Text } from 'ui'

export default function Chapter3() {
  return (
    <Chapter metadata={metadata}>
      <Text>
        Phew, that was close. You are still shaking from your battle against
        Amestris, yet relieved that a victory was possible.
      </Text>

      <Text>
        As you settle at your desk, you take a deep breath and drift off to
        replay the day’s events. Your hands keep themselves busy playing with
        the mysterious envelope, as you wonder who sent it. Who still uses
        envelopes anyways, it’s 2139 after all. Even more curious is that there
        is a stamp on it, from 2008...could this be another hint?
      </Text>

      <Text>
        Suddenly, you realize that you never claimed the block rewards from your
        competition with Amestris. Your bitcoin wallet is running low, so now’s
        a good time to top it up again.
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 2,
  slug: 'chapter-3',
  title: 'Claiming your rewards',
  image: 'https://saving-satoshi.s3.amazonaws.com/ch3.png',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
