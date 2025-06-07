import { Label } from '../ui/label.jsx'
import { Input } from '../ui/input.jsx';
import React from 'react';
import { Select, SelectValue, SelectContent, SelectTrigger } from '../ui/select.jsx';
import { Textarea } from '../ui/textarea.jsx';
import { Button } from '../ui/button.jsx';

const types ={
  INPUT:"input",
  SELECT:"select",
}

const CommonForm = ({formControls,formData,setFormData,onSubmit,buttonText}) => {
  function renderInputsByComponentType(getControlItem){
    let element = null;
    const value=formData(getControlItem.name) || ''


    switch(getControlItem.componentType) {
      case types.INPUT:
        element=(<Input
        name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        value={value}
        onChange={event=>setFormData(
          {
            ...formData,
            [getControlItem.name] : event.target.value
          }
        )}
        />
        );
        break;
        case "select":
          element=(<Select onValueChange={(value)=>setFormData({
            ...formData,
            [getControlItem.name] : value,

          })}   value={value}>
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
            element=(
              <Textarea value={value} name={getControlItem.name} placeholder={getControlItem.placeholder} id={getControlItem.id} onChange={event=>setFormData(
                {
                  ...formData,
                  [getControlItem.name] : event.target.value
                }
              )}>

              </Textarea>
            );
            break;
          default:
            case "input":
              element=(<Input
              name={getControlItem.name}
              placeholder={getControlItem.placeholder}
              id={getControlItem.name}
              type={getControlItem.type}
              value={value} 
              onChange={event=>setFormData(
                {
                  ...formData,
                  [getControlItem.name] : event.target.value
                }
              )}
              />
              );
              break;
    }   
  
  }
  return (
    <form onSubmit={onSubmit}>
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
      <Button type="Submit" className="mt-2 w-full">{buttonText || "Submit"}</Button>


    </form>
  )
}

export default CommonForm 