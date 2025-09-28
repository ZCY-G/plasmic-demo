import {
  PlasmicComponent,
  PlasmicRootProvider,
} from '@plasmicapp/loader-react';
import { PLASMIC } from '../../utils/plasmic-init';

export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}
