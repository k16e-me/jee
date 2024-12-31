import {
    _addSettings,
    _addDesignations,
    _addOffices,
    _addSectors,
    _addPractices,
    _addAfricaExpertise,
    _addCategories,
    _addNewsletter
} from '@scripts/store'
import { _getAllAPIs } from '@scripts/api'

const _setStores = async () => {
    const apis = _getAllAPIs()
    const results = await Promise.all(apis.map((fn) => fn()))
    const [
        settings,
        designations,
        categories,
        offices,
        sectors,
        practices,
        africaExpertise,
        newsletter,
    ] = results
    _addDesignations(designations.data.stories)
    _addOffices(offices.data.stories)
    _addSectors(sectors.data.stories)
    _addPractices(practices.data.stories)
    _addAfricaExpertise(africaExpertise.data.stories)
    _addCategories(categories.data.stories)
    _addNewsletter(newsletter.data.story.content)
    _addSettings(settings.data.story.content)
}

export { _setStores }