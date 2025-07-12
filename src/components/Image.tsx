import NextImage from 'next/image'
import { ImageLoaderProps, ImageProps } from 'next/image'

const myLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Image = (props: ImageProps) => {
  return <NextImage {...props} loader={myLoader} />
}

export default Image
