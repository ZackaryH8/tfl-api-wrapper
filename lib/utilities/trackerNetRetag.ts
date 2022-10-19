export function trackerNetRetag(xml: string): string {
    // Orginal Tag and replacement tag
    const tagsToReplace: { [key: string]: string } = {
        '<S': '<Station',
        '<P N=': '<Platform Name=',
        '<T S=': '<Train SetNumber=',
        '<T TrainId=': '<Train TrainId=',
        '<T LCID=': '<Train LeadingCarID=',
        'C=': 'TimeToStation=',
        'D=': 'Destination=',
        'DE=': 'DestCode=',
        'L=': 'CurrentStation=',
        'LCID=': 'LeadingCarID=',
        'LN=': 'Line=',
        'N=': 'Name=',
        'T=': 'TripNumber=',
        SecondsTo: 'SecondsToStation',
        '</S>': '</Station>',
        '</P>': '</Platform>'
    };

    // Replace xml tags
    for (const tag in tagsToReplace) {
        xml = xml.replace(new RegExp(tag, 'g'), tagsToReplace[tag]);
    }
    return xml;
}
