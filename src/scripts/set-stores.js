import {
    _addSettings
} from '@scripts/store'
import { _getAllAPIs } from '@scripts/api'

const _setStores = async () => {
    const apis = _getAllAPIs()
    const results = await Promise.all(apis.map((fn) => fn()))
    const [
        settings
    ] = results
    _addSettings(settings.data.story.content)
}

export { _setStores }