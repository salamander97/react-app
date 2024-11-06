// src/utils/imageHelper.js

// Base paths cho từng công trình - bỏ dấu / ở đầu
const IMAGE_PATHS = {
  BAIDINH: 'images/congtrinhthicong/chuabaidinh',
  TAMCHUC: 'images/congtrinhthicong/tamchuc',
  MANDALA: 'images/congtrinhthicong/mandala',
  FANSIPAN: 'images/congtrinhthicong/fansipan'
};

// Các loại media
const MEDIA_TYPES = {
  IMAGES: 'images',
  VIDEOS: 'videos',
  THUMBNAILS: 'thumbnails'
};

/**
* Lấy đường dẫn đầy đủ của media file
*/
export const getImagePath = (project, fileName, type = MEDIA_TYPES.IMAGES) => {
  const basePath = IMAGE_PATHS[project.toUpperCase()];
  if (!basePath) {
      console.warn(`Project path not found for: ${project}`);
      return '';
  }

  // Bỏ process.env.PUBLIC_URL vì đã có trong vercel.json
  
  // Nếu là video
  if (type === MEDIA_TYPES.VIDEOS) {
      return `/videos/${project.toLowerCase()}/${fileName}`;
  }

  // Nếu là thumbnail
  if (type === MEDIA_TYPES.THUMBNAILS) {
      return `/${basePath}/thumbnails/${fileName}`;
  }

  // Đường dẫn mặc định cho images - thêm / ở đầu
  return `/${basePath}/${fileName}`;
};

export const checkImageExists = async (path) => {
  try {
      const response = await fetch(path, { method: 'HEAD' });
      return response.ok;
  } catch (error) {
      console.warn(`Failed to check image: ${path}`);
      return false;
  }
};