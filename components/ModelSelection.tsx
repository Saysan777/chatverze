'use client'

import useSwr from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelection() {
    const { data: models, isLoading } = useSwr('models', fetchModels)  //useSwr(key, fetcher) Key can be amyName doesnt have to name it as the path
    const { data: model, mutate: setModel } = useSwr('model',{
        fallbackData: 'text-davinci-003'
    })
    
    return (
    <div className='mt-2'>
        <Select
            className='mt-2'
            options={models?.modelOptions}
            defaultValue={model}
            placeholder={model}
            isSearchable
            isLoading={isLoading}
            menuPosition="fixed"
            classNames={{
                control:(state) => "border-[#434656]"
            }}
            onChange={(e)=> setModel(e.value)}
        />
    </div>
  )
}

export default ModelSelection