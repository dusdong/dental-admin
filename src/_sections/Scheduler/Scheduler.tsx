import React from 'react';
import { Scheduler as KendoScheduler, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
//Components
import { SchedulerItem, SchedulerEditItem, SchedulerSlotEdit, SchedulerAgendaTask } from './SchedulerItems';

export const Scheduler = ({ data, modelFields, group, resources, onDataChange }: any) => {
  const defaultDate = new Date();
  // console.log(data);

  return (
    <KendoScheduler
      style={{ minHeight: 700 }}
      data={data}
      modelFields={modelFields}
      group={group}
      resources={resources}
      timezone={'Etc/UTC'}
      defaultDate={defaultDate}
      item={SchedulerItem}
      editItem={SchedulerEditItem}
      editSlot={SchedulerSlotEdit}
      task={SchedulerAgendaTask}
      defaultView={'day'}
      onDataChange={onDataChange}
      editable={{
        add: true,
        remove: true,
        drag: true,
        resize: true,
        edit: true,
        select: false,
      }}>
      <DayView workDayStart={'08:00'} workDayEnd={'20:00'} slotDuration={60} slotDivisions={4} />
      <WeekView slotDuration={60} slotDivisions={4} />
      <MonthView />
      {/* <AgendaView /> */}
    </KendoScheduler>
  );
};
