import { Label } from '../ui/label.jsx'
import { Input } from '../ui/input.jsx';
import React from 'react';
import { Select, SelectValue } from '../ui/select.jsx';
import { SelectContent, SelectTrigger } from '@radix-ui/react-select';

const types ={
  INPUT:"input",
  SELECT:"select",

}

const CommonForm = ({formControls}) => {
  function renderInputsByComponentType(getControlItem){
    let element = null;
    switch(getControlItem.componentType) {
      case types.INPUT:
        element=(<Input
        name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        />
        );
        break;
        case "select":
          element=(<Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder={getControlItem.placeholder}/>
          </SelectTrigger>
          <SelectContent>
            {
              getControlItem.options && 
              getControlItem.options.length > 0 ?
              getControlItem.options.map((optionItem =><SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>))
              : null

            }
          </SelectContent>
          </Select>
          );
          break;
          
          case "textarea":
            element=(<Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            />
            );
            break;
          default:
            case "input":
              element=(<Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              />
              );
              break;
    }   
  
  }
  return (
    <form>
      <div className='flex flex-col gap-3'>
        {
          formControls.map(controlItem=>
          <div key={controlItem.name } className='grid w-full gap-1.5'>
            <Label className="mb-1">{controlItem.label}</Label>
            {
              renderInputsByComponentType(controlItem) 
            }

          </div>)
        }

      </div>


    </form>
  )
}

export default CommonForm 