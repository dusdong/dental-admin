import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInternationalization } from '@progress/kendo-react-intl';
// Components
import { AgendaSvcStaffDropDownList, AgendaStatusDropDownList, AgendaFullNameDropDownList, AgendaServicesMultiSelect } from './AgendaDropDownCells';
import { AgendaStartDateInput, AgendaEndDateInput } from './AgendaDateCells';
// Styled Components
import * as SC from '../GridStyledComponents/GridCellsStyled';
// Instruments
import { IconMap } from '../../../_instruments';
// Types
import { GridCellProps } from './GridComponentsTypes';
import { AgendaDataItem, StatusNames, LookupEntity } from '../../../Agenda/AgendaTypes';
// Selectors
import { selectGridDataItemMemoValueForCell } from '../GridSelectors';
import { selectServicesMemoData } from '../../../Services/ServicesSelectors';
import { selectTeamStaffMemoData } from '../../../TeamStaff/TeamStaffSelectors';
import { selectCustomersMemoData } from '../../../Customers/CustomersSelectors';
// Hooks
import { useMemoDataItemValuesForCells } from './GridComponentsHooks';

export const AgendaStatusIcon: FC<GridCellProps<AgendaDataItem>> = ({ dataItem: { ID }, field }): JSX.Element => {
  const memoID = useMemo(() => ID, [ID]);
  const memoField = useMemo(() => field, [field]);
  const selectDataItemValue = useMemo(() => selectGridDataItemMemoValueForCell<AgendaDataItem>(memoID, memoField), [memoField, memoID]);
  const cellValue = useSelector(selectDataItemValue);

  const iconName = cellValue ? cellValue : StatusNames.Consultation;

  return (
    <SC.StatusIcon>
      <FontAwesomeIcon className="grid__icon" icon={IconMap[iconName as StatusNames].icon} style={IconMap[iconName as StatusNames].style} />
    </SC.StatusIcon>
  );
};

export const AgendaStatusCell: FC<GridCellProps<AgendaDataItem>> = ({ dataItem: { ID }, onChange, field }): JSX.Element => {
  const { memoID, memoField, cellValue, dataItemInEditValue } = useMemoDataItemValuesForCells<AgendaDataItem>(ID, field);

  return (
    <td>
      {dataItemInEditValue ? (
        <AgendaStatusDropDownList dataItemID={memoID} field={memoField} onChange={onChange} value={cellValue as StatusNames} />
      ) : (
        cellValue
      )}
    </td>
  );
};

export const AgendaSvcStaffCell: FC<GridCellProps<AgendaDataItem>> = ({ dataItem: { ID }, onChange, field }): JSX.Element => {
  const { memoID, memoField, cellValue, dataItemInEditValue } = useMemoDataItemValuesForCells<AgendaDataItem>(ID, field);
  const LookupHR01team = cellValue as LookupEntity;

  const selectTeamStaffData = useMemo(selectTeamStaffMemoData, []);
  const teamStaffData = useSelector(selectTeamStaffData);

  const currentEmployee = teamStaffData.find(({ Id }) => Id === LookupHR01team.Id);
  const value = currentEmployee ? currentEmployee.FullName.split(' ').slice(-1)[0] : '';

  return (
    <td>
      {dataItemInEditValue ? (
        <AgendaSvcStaffDropDownList dataItemID={memoID} field={memoField} onChange={onChange} domainData={teamStaffData} value={value} />
      ) : (
        value
      )}
    </td>
  );
};

export const AgendaServicesCell: FC<GridCellProps<AgendaDataItem>> = ({ dataItem: { ID }, onChange, field }): JSX.Element => {
  const { memoID, memoField, cellValue, dataItemInEditValue } = useMemoDataItemValuesForCells<AgendaDataItem>(ID, field);
  const LookupMultiBP01offerings = cellValue as { results: LookupEntity[] };

  const selectServicesData = useMemo(selectServicesMemoData, []);
  const servicesData = useSelector(selectServicesData);
  const currentServices = servicesData.filter(({ Id }) => LookupMultiBP01offerings.results.find((item) => item.Id === Id));
  const value = currentServices.map(({ OfferingsName_Edit }) => OfferingsName_Edit).join(' | ');

  return (
    <td>
      {dataItemInEditValue ? (
        <AgendaServicesMultiSelect dataItemID={memoID} field={memoField} onChange={onChange} value={currentServices} domainData={servicesData} />
      ) : (
        value
      )}
    </td>
  );
};

export const AgendaFullNameCell: FC<GridCellProps<AgendaDataItem>> = ({ dataItem: { ID }, onChange, field }): JSX.Element => {
  const { memoID, memoField, cellValue, dataItemInEditValue } = useMemoDataItemValuesForCells<AgendaDataItem>(ID, field);
  const LookupCM102customers = cellValue as LookupEntity;

  const selectCustomersData = useMemo(selectCustomersMemoData, []);
  const customersData = useSelector(selectCustomersData);
  const currentCustomer = customersData.find(({ Id }) => Id === LookupCM102customers.Id);
  const value = currentCustomer ? currentCustomer.FullName : '';

  return (
    <td>
      {dataItemInEditValue ? (
        <AgendaFullNameDropDownList dataItemID={memoID} field={memoField} onChange={onChange} domainData={customersData} value={value} />
      ) : (
        value
      )}
    </td>
  );
};

export const AgendaStartDateCell: FC<GridCellProps<AgendaDataItem>> = ({ dataItem: { ID }, onChange, field }): JSX.Element => {
  const { memoID, memoField, cellValue, dataItemInEditValue } = useMemoDataItemValuesForCells<AgendaDataItem>(ID, field);
  const intlService = useInternationalization();
  const value = cellValue as Date;

  return (
    <td style={{ padding: '18px 12px' }}>
      {dataItemInEditValue ? (
        <AgendaStartDateInput dataItemID={memoID} field={memoField} onChange={onChange} value={value} />
      ) : (
        intlService.formatDate(value, 'H:mm | dd.MM')
      )}
    </td>
  );
};

export const AgendaEndDateCell: FC<GridCellProps<AgendaDataItem>> = ({ dataItem: { ID }, onChange, field }): JSX.Element => {
  const { memoID, memoField, cellValue, dataItemInEditValue } = useMemoDataItemValuesForCells<AgendaDataItem>(ID, field);
  const intlService = useInternationalization();
  const value = cellValue as Date;

  return (
    <td>
      {dataItemInEditValue ? (
        <AgendaEndDateInput dataItemID={memoID} field={memoField} onChange={onChange} value={value} />
      ) : (
        intlService.formatDate(value, 'H:mm | dd.MM')
      )}
    </td>
  );
};
