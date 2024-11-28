import { ClipboardAction } from './clipboard-action';
import { ClipboardActionGroup } from './clipboard-action-group';
import { ClipboardContent } from './clipboard-content';
import { ClipboardGroup } from './clipboard-group';
import { ClipboardHeader } from './clipboard-header';
import { ClipboardInformationFlag } from './clipboard-information-flag';
import { ClipboardRoot } from './clipboard-root';

export const Clipboard = {
  Root: ClipboardRoot,
  Header: ClipboardHeader,
  ActionGroup: ClipboardActionGroup,
  Content: ClipboardContent,
  Group: ClipboardGroup,
  Action: ClipboardAction,
  InformationFlag: ClipboardInformationFlag,
};
