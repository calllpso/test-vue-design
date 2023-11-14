import {ref, toRaw} from 'vue'
import _ from 'lodash';


// forms
export class EmployeeForm {
    constructor() {
        this.head = { text: 'Сотрудник' }
        this.single = {
            surname:    { id: '', type: 'input', name: 'Фамилия', value: '' },
            name:       { id: '', type: 'input', name: 'Имя', value: '' },
            lastname:   { id: '', type: 'input', name: 'Отчество', value: '' },
            position:   { id: '', type: 'input', name: 'Должность', value: '' },
            division:   { id: '', type: 'input', name: 'Подразделение', value: '' },
        }
        this.multiple = [
            {
                id: '',
                type: 'input',
                name: 'Телефон',
                value: '1',
                children: {
                    values: {
                        sms: { type: 'slider', name: 'СМС', value: false },
                        voice: { type: 'slider', name: 'Звонок', value: false },
                    },
                    other: [
                        { type: 'icon', icon: 'drag' },
                        { type: 'icon', icon: 'delete' },
                    ],
                },
            },
        ];
        this.apiJson={single: {}, multiple: []}
    }
    bitView(sms, voice){
        let status = (sms ? 2 : 0) + (voice ? 1 : 0)
        return status
    }

    apiJsonTransform(){
        this.apiJson={single: {}, multiple: []}
        for(let key in this.single)
            {
                this.apiJson.single[key] = this.single[key].value
            } 
        for(let key in this.multiple)
            {
                this.apiJson.multiple.push({
                    priority: key,
                    number: this.multiple[key].value,
                    status: this.bitView(
                        this.multiple[key].children.values.sms.value,
                        this.multiple[key].children.values.voice.value
                    )
                })
            } 
        return this.apiJson
    }
}



export class AudioForm {
    constructor() {
        this.head = { text: 'Аудио' }
        this.single = {
            fileName: { id: '', type: 'input', name: 'fileName', value: '' },
            audio: { id: '', type: 'input', name: 'Audio', value: '' },
        }
        this.apiJson={single: {}}
    }

    apiJsonTransform(){
        this.apiJson={single: {}}
        for(let key in this.single)
            {
                this.apiJson.single[key] = this.single[key].value
            } 
        return this.apiJson
    }
}


export class ListForm {
    constructor() {
        this.head = { text: 'Список' };
        this.single = {
            fileName:       { id: '', type: 'input', name: 'NameList',       value: '', }, 
            status:         { id: '', type: 'input', name: 'Status',         value: '', },
            name:           { id: '', type: 'input', name: 'Audio name',     value: '', },
            audio:          { id: '', type: 'audio', name: 'Audio',          value: '', },
            configuration:  { id: '', type: 'input', name: 'Configuration',  value: '', },
        }
        this.message = null
        this.apiJson={single: {}}
    }

    apiJsonTransform(){
        this.apiJson={single: {}}
        for(let key in this.single)
            {
                this.apiJson.single[key] = this.single[key].value
            } 
        this.apiJson.single.message = this.message
        return this.apiJson
    }
}



// tables
export class EmployeeTable {
    constructor(body) {
        this.thead = { 
            surname:  {value:   'Фамилия'      , sort: null        }               ,          
            name:     {value:   'Имя'          , sort: null        }               ,      
            lastname: {value:   'Отчество'     , sort: null        }              ,          
            division: {value:   'Подразделение', sort: null        }             ,          
            position: {value:   'Должность'    , sort: null        }             ,          
            phone:    {value:   'Телефон'      , sort: null        }               ,      
            actions:  {value:   'actions'      , sort: null        }               ,          
        }
        this.tbodyConst = []
        this.tbody = []
        this.service = {
            sort: {
                field: '', orderBy: 0
            } 
        }
        this.firstPageEntry=0
        this.lastPageEntry=0

        this.sortMap = {
            null: 'asc',
            asc: 'desc',
            desc: null,
          };

        this.serialize(body)
        this.orderById()
    }
    serialize(data){
        for (let item in data){
            let entry = {common: {}, service: {}}
            for (let field in this.thead){
                entry.common[field] = data[item][field]
            }
            entry.service.id = data[item].id
            this.tbody.push(entry)    
        }
        this.tbodyConst = this.tbody
    }
    orderById(){
        this.tbody = _.orderBy(this.tbody, ['service.id'], ['desc'])
    }
    setSort(sortField){
        let tempSort = this.sortMap[this.thead[sortField].sort]
        for( let field in this.thead){
            this.thead[field].sort = null 
        }
        this.thead[sortField].sort = tempSort
        if (tempSort != null){
            this.tbody = _.orderBy(this.tbody, [`common.${sortField}`], [tempSort])
        }
        else{
            this.orderById()
        }
    }
    search(searchText){
        this.tbody = _.filter(this.tbodyConst, (user) => {
            return _.some(user.common, (value) => {
              return String(value).toLowerCase().includes(searchText.toLowerCase());
            });
          });
    }
    // pagination
    setLastPageEntry(){
        this.lastPageEntry = this.tbody.common.length
    }
}