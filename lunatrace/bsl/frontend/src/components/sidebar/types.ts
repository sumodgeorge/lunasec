/*
 * Copyright by LunaSec (owned by Refinery Labs, Inc)
 *
 * Licensed under the Business Source License v1.1
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 * https://github.com/lunasec-io/lunasec/blob/master/licenses/BSL-LunaTrace.txt
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/*
 * Copyright 2022 by LunaSec (owned by Refinery Labs, Inc)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { Icon } from 'react-feather';

/* Can either be a link or a subsection with child links*/
// export interface SidebarItem {
//   href: string;
//   icon?: Icon;
//   title: string;
//   children?: SidebarItem[];
//   badge?: string;
// }

export interface SidebarLink {
  href: string;
  title: string;
  icon?: Icon;
  badge?: string;
}

export interface SidebarSubSection extends SidebarLink {
  children: SidebarItem[];
}

export type SidebarItem = SidebarLink | SidebarSubSection;

export interface NavSection {
  title: string;
  items: SidebarItem[];
}
