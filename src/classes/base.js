import {ref} from 'vue'

export class Employee {
    constructor() {
        this.head = ref({ text: 'Сотрудник' });
        this.single = ref({
            surname:    { id: '', type: 'input', name: 'Фамилия', value: '' },
            name:       { id: '', type: 'input', name: 'Имя', value: '' },
            lastname:   { id: '', type: 'input', name: 'Отчество', value: '' },
            position:   { id: '', type: 'input', name: 'Должность', value: '' },
            division:   { id: '', type: 'input', name: 'Подразделение', value: '' },
        });
        this.multiple = ref([
            {
                id: '',
                type: 'input',
                name: 'Телефон',
                value: '1',
                children: {
                    values: {
                        sms: { type: 'slider', name: 'Sms', value: false },
                        voice: { type: 'slider', name: 'Voice', value: false },
                    },
                    other: [
                        { type: 'icon', icon: 'drag' },
                        { type: 'icon', icon: 'delete' },
                    ],
                },
            },
        ]);
        this.apiJson={single: {}, multiple: []}
    }
    bitView(sms, voice){
        let status = (sms ? 2 : 0) + (voice ? 1 : 0)
        return status
    }

    apiJsonTransform(){
        this.apiJson={single: {}, multiple: []}
        for(let key in this.single.value)
            {
                this.apiJson.single[key] = this.single.value[key].value
                // this.apiJson.single.push({[key]: this.single.value[key].value})
            } 
        for(let key in this.multiple.value)
            {
                this.apiJson.multiple.push({
                    priority: key,
                    number: this.multiple.value[key].value,
                    status: this.bitView(
                        this.multiple.value[key].children.values.sms.value,
                        this.multiple.value[key].children.values.voice.value
                    )
                })
            } 
        return this.apiJson
    }
}



export class Audio {
    constructor() {
        this.head = ref({ text: 'Аудио' });
        this.single = ref({
            fileName: { id: '', type: 'input', name: 'fileName', value: '' },
            audio: { id: '', type: 'input', name: 'Audio', value: '' },
        })
        this.apiJson={single: {}}
    }

    apiJsonTransform(){
        this.apiJson={single: {}}
        for(let key in this.single.value)
            {
                this.apiJson.single[key] = this.single.value[key].value
            } 
        return this.apiJson
    }
}


export class List {
    constructor() {
        this.head = ref({ text: 'Список' });
        this.single = ref({
            fileName:       { id: '', type: 'input', name: 'NameList',       value: '', }, 
            status:         { id: '', type: 'input', name: 'Status',         value: '', },
            name:           { id: '', type: 'input', name: 'Audio name',     value: '', },
            audio:          { id: '', type: 'audio', name: 'Audio',          value: '', },
            configuration:  { id: '', type: 'input', name: 'Configuration',  value: '', },
        })
        this.message = null
        this.apiJson={single: {}}
    }

    apiJsonTransform(){
        this.apiJson={single: {}}
        for(let key in this.single.value)
            {
                this.apiJson.single[key] = this.single.value[key].value
            } 
        this.apiJson.single.message = this.message
        return this.apiJson
    }
}
