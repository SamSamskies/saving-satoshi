'use client'

import { useState } from 'react'
import {
  StatusBar,
  Button,
  Lesson,
  LessonInfo,
  LessonTabs,
  Title,
  Text,
  Tooltip,
  LessonPrompt,
} from 'ui'
import { FormattedMessage, useIntl } from 'react-intl'
import { formattedMessages } from './messages'

const inputAmount = 154
const answer =
  '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
]

export default function Genesis1() {
  const [userInput, setUserInput] = useState('')
  const { formatMessage } = useIntl()

  return (
    <Lesson>
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />

      <LessonInfo>
        <Title>Find block 0</Title>

        <Text className="text-lg">
          <FormattedMessage
            {...formattedMessages.firstParagraph}
            values={{
              blockExplorerTooltip: (
                <Tooltip
                  content={formatMessage(
                    formattedMessages.blockExplorerTooltipContent
                  )}
                  href="https://blockstream.info/"
                >
                  <FormattedMessage {...formattedMessages.blockExplorer} />
                </Tooltip>
              ),
            }}
          />
        </Text>

        <Text className="text-lg">
          <span>
            Open up the transaction so you can take a closer look at the
            details. On the left is an input called ’Coinbase’. Inside that is a
            field called ’ScriptSig’. Find the
          </span>
          <Tooltip content="Short for hexadecimal, a numeral system that represents numbers using a base of 16.">
            HEX
          </Tooltip>
          <span>representation and paste it below.</span>
        </Text>

        <Button
          href="https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
          external={true}
          classes="mt-4"
        >
          View Block 0
        </Button>
      </LessonInfo>

      <hr className="border-1 invisible h-1 w-full border-white/25 md:visible" />

      <LessonPrompt
        className="max-w-[840px] px-4 py-8 md:items-center"
        label="Paste the ScriptSig HEX Representation"
        amount={inputAmount}
        onChange={setUserInput}
      />

      <StatusBar
        full
        next="/chapters/chapter-1/genesis-2"
        input={userInput}
        expected={answer}
      />
    </Lesson>
  )
}

export const metadata = {
  title: 'Genesis',
}
