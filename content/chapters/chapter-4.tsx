import { Chapter, Text } from 'ui'

export default function Chapter4() {
  return (
    <Chapter metadata={metadata}>
      <Text>
        A mysterious billionaire is claiming to be Satoshi Nakamoto. Why would
        Satoshi come forward after all this time? What are the chances Satoshi
        is even alive?
      </Text>

      <Text>
        While the public debate is largely focused on the spectacle, you have an
        inkling that it might be possible to disarm the claim using your
        knowledge of cryptography.
      </Text>
    </Chapter>
  )
}

export const metadata = {
  position: 3,
  slug: 'chapter-4',
  title: 'Will the real Satoshi please stand up?',
  image: 'https://saving-satoshi.s3.amazonaws.com/ch4.png',
  intro: 'reaping-rewards',
  lessons: [],
  challenges: [],
}
