import {
    _addSettings,
    _addOffices,
    _addSectors,
    _addPractices,
    _addAfricaExpertise
} from '@scripts/store'
import { _getAllAPIs } from '@scripts/api'

const _setStores = async () => {
    const apis = _getAllAPIs()
    const results = await Promise.all(apis.map((fn) => fn()))
    const [
        settings,
        offices,
        sectors,
        practices,
        africaExpertise,
    ] = results
    _addOffices(offices.data.stories)
    _addSectors(sectors.data.stories)
    _addPractices(practices.data.stories)
    _addAfricaExpertise(africaExpertise.data.stories)
    _addSettings(settings.data.story.content)
}

export { _setStores }