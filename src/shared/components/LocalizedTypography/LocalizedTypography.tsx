/* eslint-disable @typescript-eslint/no-unused-vars */
import { TOptionsBase } from 'i18next'
import { Translation } from 'react-i18next'

import { Typography, type TypographyProps } from '@/shared/uikit'

interface LocalizedTypographyProps extends TypographyProps {
  tKey: string
  tOptions?: TOptionsBase
}

export const LocalizedTypography = ({ tKey, tOptions, ...other }: LocalizedTypographyProps) => (
  <Translation>{(t, { i18n }) => <Typography text={t(tKey, { ...tOptions })} {...other} />}</Translation>
)
