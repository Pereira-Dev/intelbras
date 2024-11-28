import { usePortal } from "../../../utils/portal";
import { useSelect as useSelectContext } from "./contexts/select-context";
import { SelectRoot } from "./select-root";
import { SelectTrigger } from "./select-trigger";
import { SelectInputTrigger } from "./select-input-trigger";
import { SelectViewport } from "./select-viewport";
import { InputRoot } from "../input/input-root";
import { InputGroup } from "../input/input-group";
import { InputItem } from "../input/input-item";
import { InputAction } from "../input/input-action";

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Input: {
    Root: InputRoot,
    Group: InputGroup,
    Item: InputItem,
    Action: InputAction,
    Trigger: SelectInputTrigger,
  },
  Viewport: SelectViewport,
};

export const useSelectPortal = usePortal;

export const useSelect = useSelectContext;
