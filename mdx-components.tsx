import { Heading, Image, Link, List, Text } from '@chakra-ui/react';
import type { MDXComponents } from 'mdx/types';

export const _COMPONENTS: MDXComponents = {
  h1: (props) => <Heading as='h1' py='0.5em' fontSize='2xl' {...props} />,
  h2: (props) => <Heading as='h2' py='0.5em' fontSize='2xl' {...props} />,
  h3: (props) => <Heading as='h3' py='0.5em' fontSize='2xl' {...props} />,
  p: (props) => <Text py='8px' {...props} />,
  strong: () => <Text as='b'/>,
  i: () => <Text as='i'/>,
  u: () => <Text as='u'/>,
  ul: (props) => <List.Root {...props} />,
  ol: (props) => <List.Root as='ol' {...props} />,
  li: (props) => <List.Item {...props} />,
  img: (props) => <Image src={props.src} alt={props.alt} {...props} />,
  a: (props) => <Link href={props.href ?? '#'} color='blue.400' _hover={{ color: 'blue.500' }}/>,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ..._COMPONENTS,
  };
}
