import { ButtonGroupConfigurator } from '../../../../components/buttonGroupConfigurator';
import ConfigurableFormItem from '@/components/formDesigner/components/formItem';
import React from 'react';
import { buttonsSettingsForm } from './settings';
import { GroupOutlined } from '@ant-design/icons';
import { IButtonsProps as IButtonsComponentProps } from './interfaces';
import { IToolboxComponent } from '@/interfaces';

const ButtonsComponent: IToolboxComponent<IButtonsComponentProps> = {
  type: 'buttons',
  name: 'Buttons',
  isInput: true,
  isOutput: true,
  icon: <GroupOutlined />,
  Factory: ({ model }) => {
    return (
      <ConfigurableFormItem model={model}>
        <ButtonGroupConfigurator title="Configure Buttons" readOnly={model.readOnly}/>
      </ConfigurableFormItem>
    );
  },
  settingsFormMarkup: buttonsSettingsForm,
};

export default ButtonsComponent;
