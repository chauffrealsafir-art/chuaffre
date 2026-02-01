import { useEffect } from 'react';

type PageMetaProps = {
  title: string;
  description: string;
};

const PageMeta = ({ title, description }: PageMetaProps) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);
  return null;
};

export default PageMeta;
