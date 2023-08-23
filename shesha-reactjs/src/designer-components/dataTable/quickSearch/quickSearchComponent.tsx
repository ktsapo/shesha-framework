import { IToolboxComponent } from '../../../interfaces';
import { FormMarkup, IConfigurableFormComponent } from '../../../providers/form/models';
import { SearchOutlined } from '@ant-design/icons';
import settingsFormJson from './settingsForm.json';
import { GlobalTableFilter } from '../../..';
import React from 'react';
import { validateConfigurableComponentSettings } from '../../../providers/form/utils';
import { migrateCustomFunctions, migratePropertyName } from 'designer-components/_common-migrations/migrateSettings';

export interface IQuickSearchComponentProps extends IConfigurableFormComponent { }

const settingsForm = settingsFormJson as FormMarkup;

const QuickSearchComponent: IToolboxComponent<IQuickSearchComponentProps> = {
  type: 'datatable.quickSearch',
  name: 'Quick Search',
  icon: <SearchOutlined />,
  factory: (_model: IQuickSearchComponentProps) => {
    return <GlobalTableFilter />;
  },
  initModel: (model: IQuickSearchComponentProps) => {
    return {
      ...model,
      items: [],
    };
  },
  migrator: m => m
    .add(0, (prev) => migratePropertyName(migrateCustomFunctions(prev)))
  ,
  settingsFormMarkup: settingsForm,
  validateSettings: model => validateConfigurableComponentSettings(settingsForm, model),
};

export default QuickSearchComponent;
