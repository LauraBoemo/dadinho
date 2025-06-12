export const getTransformString = (input: string) => {
    const delimiters = ['Pegue', 'Remova'];
    const placeholder = '{SPLIT_HERE}';
  
    let inputWithPlaceholders = input;
    delimiters.forEach(delimiter => {
        inputWithPlaceholders = inputWithPlaceholders.replace(new RegExp(delimiter, 'g'), placeholder + delimiter);
    });
  
    const segments = inputWithPlaceholders.split(placeholder);
  
    const transformedSegments = segments
        ?.map(segment =>
            segment
                .trim()
                .replace(/\|/g, ' ')
                .replace(/\s+/g, ' ')
                .replace(/\s+$/, '')
        )
        .filter(segment => segment !== '');
    
    return transformedSegments;
}

export default getTransformString;