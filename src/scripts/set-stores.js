import {
    _addSettings,
    _addPractices,
    _addAfricaExpertise
} from '@scripts/store'
import { _getAllAPIs } from '@scripts/api'

const _setStores = async () => {
    const apis = _getAllAPIs()
    const results = await Promise.all(apis.map((fn) => fn()))
    const [
        settings,
        practices,
        africaExpertise,
    ] = results
    _addPractices(practices.data.stories)
    _addAfricaExpertise(africaExpertise.data.stories)
    _addSettings(settings.data.story.content)
}

export { _setStores }