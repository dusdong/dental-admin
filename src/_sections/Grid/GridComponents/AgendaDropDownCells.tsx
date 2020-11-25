import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { DropDownList, MultiSelect, MultiSelectChangeEvent } from '@progress/kendo-react-dropdowns';
// Types
import { CellDropDownListProps } from './GridComponentsTypes';
import { AgendaDataItem, StatusNames } from '../../../Agenda/AgendaTypes';
import { TeamStaffDataItem } from '../../../TeamStaff/TeamStaffTypes';
import { ServicesDataItem } from '../../../Services/ServicesTypes';
// Selectors
import { selectAgendaMemoStatusNameList } from '../../../Agenda/AgendaSelectors';
import { selectGridDataItemIsLoading } from '../GridSelectors';
// Helpers
import { onGridDropDownChange, transformDomainDataToDropDownListData, transformDomainDataToMultiSelectData } from './GridComponentsHelpers';
import { CustomersDataItem } from '../../../Customers';

export const AgendaStatusDropDownList: FC<CellDropDownListProps<AgendaDataItem, StatusNames>> = ({ dataItemID, field, onChange, value }) => {
  const isDataItemLoading = useSelector(selectGridDataItemIsLoading);
  const selectStatusNameList = useMemo(selectAgendaMemoStatusNameList, []);
  const statusNameList = useSelector(selectStatusNameList);
  const dataForDropDownList = statusNameList.map((value) => ({ [field]: value, value }));
  const dropDownListValue = dataForDropDownList.find((item) => item.value === value);

  const onStatusChange = onGridDropDownChange<AgendaDataItem>(dataItemID, field, onChange);

  return (
    <DropDownList onChange={onStatusChange} value={dropDownListValue} data={dataForDropDownList} textField={field} disabled={isDataItemLoading} />
  );
};

export const AgendaSvcStaffDropDownList: FC<CellDropDownListProps<AgendaDataItem, string, TeamStaffDataItem[]>> = ({
  dataItemID,
  field,
  onChange,
  domainData,
  value,
}) => {
  const isDataItemLoading = useSelector(selectGridDataItemIsLoading);
  const dataForDropdownList = domainData ? transformDomainDataToDropDownListData(domainData) : [];
  const dropDownListValue = dataForDropdownList.find((item) => item.text === value);

  const onSvcStaffChange = onGridDropDownChange<AgendaDataItem>(dataItemID, field, onChange);

  return (
    <DropDownList onChange={onSvcStaffChange} value={dropDownListValue} data={dataForDropdownList} textField="text" disabled={isDataItemLoading} />
  );
};

export const AgendaFullNameDropDownList: FC<CellDropDownListProps<AgendaDataItem, string, CustomersDataItem[]>> = ({
  dataItemID,
  field,
  onChange,
  domainData,
  value,
}) => {
  const isDataItemLoading = useSelector(selectGridDataItemIsLoading);
  const dataForDropDownList = domainData ? transformDomainDataToDropDownListData(domainData) : [];
  const dropDownListValue = dataForDropDownList.find((item) => item.text === value);

  const onFullNameChange = onGridDropDownChange<AgendaDataItem>(dataItemID, field, onChange);

  return (
    <DropDownList onChange={onFullNameChange} value={dropDownListValue} data={dataForDropDownList} textField="text" disabled={isDataItemLoading} />
  );
};

export const AgendaServicesMultiSelect: FC<CellDropDownListProps<AgendaDataItem, ServicesDataItem[], ServicesDataItem[]>> = ({
  dataItemID,
  field,
  onChange,
  value,
  domainData,
}) => {
  const isDataItemLoading = useSelector(selectGridDataItemIsLoading);
  const multiSelectData = domainData ? transformDomainDataToMultiSelectData(domainData) : [];
  const dropDownListValue = transformDomainDataToMultiSelectData(value);

  const onServicesChange = (evt: MultiSelectChangeEvent) => {
    onChange({
      dataItem: dataItemID,
      field,
      syntheticEvent: evt.syntheticEvent,
      value: { results: evt.target.value.map(({ value }) => value) },
    });
  };

  return <MultiSelect onChange={onServicesChange} value={dropDownListValue} data={multiSelectData} textField="text" disabled={isDataItemLoading} />;
};
