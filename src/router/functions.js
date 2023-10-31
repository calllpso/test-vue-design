import router from './index'

export function routerPush(path=null, element=null){
    if (path!=undefined){
        if (element!=undefined){
            if (element.id!=undefined){
                router.push({path:`${path}/${element.id}`})
            }
            else{
                router.push({path:`${path}/${element}`})
            }
        }
        else{
            router.push({path:`${path}`})
        }
    }
    else{
        console.log('error')
    }
}

export function routerRelativePush(relativePath=null){
    if (relativePath!=undefined){
        routerPush(`${router.currentRoute.value.path}/${relativePath}`)
        // console.log(`${router.currentRoute.value.path}/${relativePath}`)
    }
    else{
        console.log('error')
    }
}