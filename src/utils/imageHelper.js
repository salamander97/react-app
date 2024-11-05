// src/utils/imageHelper.js

// Base paths cho từng công trình
const IMAGE_PATHS = {
    BAIDINH: '/images/congtrinhthicong/chuabaidinh',
    TAMCHUC: '/images/congtrinhthicong/tamchuc',
    MANDALA: '/images/congtrinhthicong/mandala',
    FANSIPAN: '/images/congtrinhthicong/fansipan'
  };
  
  // Các loại media
  const MEDIA_TYPES = {
    IMAGES: 'images',
    VIDEOS: 'videos',
    THUMBNAILS: 'thumbnails'
  };
  
  /**
   * Lấy đường dẫn đầy đủ của media file
   * @param {string} project - Tên dự án (BAIDINH, TAMCHUC, ...)
   * @param {string} fileName - Tên file
   * @param {string} type - Loại media (images, videos, thumbnails)
   * @returns {string} Đường dẫn đầy đủ
   */
  export const getImagePath = (project, fileName, type = MEDIA_TYPES.IMAGES) => {
    const basePath = IMAGE_PATHS[project.toUpperCase()];
    if (!basePath) {
      console.warn(`Project path not found for: ${project}`);
      return '';
    }
  
    // Nếu là video, thay đổi base path
    if (type === MEDIA_TYPES.VIDEOS) {
      return `${process.env.PUBLIC_URL}/videos/${project.toLowerCase()}/${fileName}`;
    }
  
    // Nếu là thumbnail, thêm /thumbnails vào path
    if (type === MEDIA_TYPES.THUMBNAILS) {
      return `${process.env.PUBLIC_URL}${basePath}/thumbnails/${fileName}`;
    }
  
    // Đường dẫn mặc định cho images
    return `${process.env.PUBLIC_URL}${basePath}/${fileName}`;
  };
  
  /**
   * Kiểm tra file có tồn tại không
   * @param {string} path - Đường dẫn file
   * @returns {Promise<boolean>}
   */
  export const checkImageExists = async (path) => {
    try {
      const response = await fetch(path, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      console.warn(`Failed to check image: ${path}`);
      return false;
    }
  };
  
  // Sử dụng:
  // Ảnh thường: getImagePath('BAIDINH', 'trongdong1.jpg')
  // -> '/images/congtrinhthicong/chuabaidinh/trongdong1.jpg'
  
  // Video: getImagePath('BAIDINH', 'trongdong-process.mp4', MEDIA_TYPES.VIDEOS)
  // -> '/videos/baidinh/trongdong-process.mp4'
  
  // Thumbnail: getImagePath('BAIDINH', 'trongdong1-thumb.jpg', MEDIA_TYPES.THUMBNAILS)
  // -> '/images/congtrinhthicong/chuabaidinh/thumbnails/trongdong1-thumb.jpg'