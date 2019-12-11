import { FunctionComponent, ReactElement } from 'react';
import { Callback, DefaultProps } from './_shared';

type Coordinate = [number, number];

export type DiagramPort = {
  id: string,
  canLink: (port: DiagramPort) => boolean,
  alignment: 'right' | 'left' | 'top' | 'bottom',
}

export type DiagramNode = {
  id: string,
  coordinates: Coordinate,
  content?: string | ReactElement,
  inputs?: DiagramPort[],
  outputs?: DiagramPort[],
  type?: 'default',
  renderer?: (props: DiagramProps) => unknown,
  className?: string,
}

export type DiagramLink = {
  input: string,
  output: string,
  label?: string | ReactElement,
  readonly?: boolean,
}

export type DiagramSchema = {
  nodes: DiagramNode[],
  links?: DiagramLink[],
}

export type DiagramProps = DefaultProps & {
  schema?: DiagramSchema,
  onChange?: Callback<DiagramSchema, undefined>,
};

declare const Diagram: FunctionComponent<DiagramProps>;

export default Diagram;
