import Link from 'next/link';

const CustomLink = ({herf,...rest})=>{
  const isInternalLink = herf && herf.startsWith('/')
  if (isInternalLink){
    return <Link href={herf} {...rest} />
  }
  return  <a target="_blank" rel="noopener noreferrer" href={herf} {...rest} />
}


export default CustomLink