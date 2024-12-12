import {
    _addSettings,
    _addAwards,
    _addPeople,
    _addInsights,
    _addEvents,
    _addDesignations,
    _addOffices,
    _addOpenings,
    _addSectors,
    _addPractices,
    _addAfricaExpertise,
    _addAfricaIp,
    _africaIp,
    _addCategories,
    _addNewsletter,
    _addRegions,
} from '@scripts/store'
import { _getAllAPIs } from '@scripts/api'

const _setAllStores = async () => {
    const apis = _getAllAPIs()
    const results = await Promise.all(apis.map((fn) => fn()))
    const [
        settings,
        awards,
        designations,
        categories,
        offices,
        openings,
        people,
        insights,
        events,
        sectors,
        practices,
        africaExpertise,
        africaIp,
        newsletter,
        regions,
    ] = results
    _addAwards(awards.data.stories)
    _addPeople(people)
    _addInsights(insights)
    _addEvents(events)
    _addDesignations(designations.data.stories)
    _addOffices(offices.data.stories)
    _addOpenings(openings.data.stories)
    _addSectors(sectors.data.stories)
    _addPractices(practices.data.stories)
    _addAfricaExpertise(africaExpertise.data.stories)
    _addAfricaIp(africaIp.data.stories)
    _addCategories(categories.data.stories)
    _addNewsletter(newsletter.data.story.content)
    _addRegions(regions.data.stories)
    _addSettings(settings.data.story.content)
}

export { _setAllStores };