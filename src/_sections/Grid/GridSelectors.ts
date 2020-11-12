// Types
import { GlobalState } from '../../_init';

export const selectGridData = ({ GridState }: GlobalState) => GridState.data;

export const selectGridDataName = ({ GridState }: GlobalState) => GridState.dataName;

export const selectGridEditField = ({ GridState }: GlobalState) => GridState.editField;

export const selectGridTitleForAddNewItemSection = ({ GridState }: GlobalState) => GridState.titleForAddNewItemSection;

export const selectGridActions = ({
  GridState: {
    setData,
    onItemEdit,
    onItemUpdatedAfterEdit,
    onItemRemove,
    onCancelEdit,
    onAddNewItemToData,
    onDiscardNewItemToData,
    onAddNewItem,
    onItemChange,
  },
}: GlobalState) => ({
  setData,
  onItemEdit,
  onItemUpdatedAfterEdit,
  onItemRemove,
  onCancelEdit,
  onItemChange,
  onAddNewItem,
  onAddNewItemToData,
  onDiscardNewItemToData,
});
