import React, { useState, useRef, useEffect } from 'react';
import { Upload, X, Check, Image as ImageIcon } from 'lucide-react';

function ImageUploader({ value, onChange }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (value && !selectedImage) {
      // If we already have a logo but aren't currently editing
      setSelectedImage(value);
    }
  }, [value, selectedImage]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setScale(1); // reset scale
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    if (!canvasRef.current || !imageRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Fixed size for the final logo (e.g., 200x200)
    canvas.width = 200;
    canvas.height = 200;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const img = imageRef.current;
    
    // Calculate dimensions based on scale
    const scaledWidth = img.naturalWidth * scale;
    const scaledHeight = img.naturalHeight * scale;
    
    // Center the image
    const x = (canvas.width - scaledWidth) / 2;
    const y = (canvas.height - scaledHeight) / 2;
    
    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
    
    const dataUrl = canvas.toDataURL('image/png');
    onChange(dataUrl);
    setSelectedImage(null); // Close editor view, rely on parent to show the saved logo
  };

  const handleRemove = () => {
    setSelectedImage(null);
    onChange('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // If a logo is saved and we are not currently uploading a new one, show the preview
  if (value && !selectedImage.startsWith('data:image') && selectedImage === value) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <img src={value} alt="Restaurant Logo" style={{ width: '64px', height: '64px', borderRadius: '8px', objectFit: 'contain', border: '1px solid var(--border)' }} />
        <button type="button" onClick={handleRemove} style={{ background: 'none', border: '1px solid var(--border)', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem' }}>
          Change Logo
        </button>
      </div>
    );
  }

  // If we are currently editing an image
  if (selectedImage) {
    return (
      <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem', background: '#F9FAFB' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Adjust Logo</span>
          <button type="button" onClick={handleRemove} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={16} />
          </button>
        </div>
        
        <div style={{ width: '200px', height: '200px', margin: '0 auto', overflow: 'hidden', border: '2px dashed var(--border)', borderRadius: '8px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
          <img 
            ref={imageRef}
            src={selectedImage} 
            alt="Preview" 
            style={{ 
              transform: `scale(${scale})`, 
              transformOrigin: 'center center',
              transition: 'transform 0.1s',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain'
            }} 
          />
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Smaller</span>
          <input 
            type="range" 
            min="0.1" 
            max="3" 
            step="0.05" 
            value={scale} 
            onChange={(e) => setScale(parseFloat(e.target.value))}
            style={{ flex: 1 }}
          />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Larger</span>
        </div>

        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button type="button" onClick={handleSave} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
            <Check size={16} style={{ marginRight: '0.25rem' }} /> Save Logo
          </button>
        </div>
        
        {/* Hidden canvas for saving the final image */}
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      </div>
    );
  }

  return (
    <div 
      className="upload-box" 
      onClick={() => fileInputRef.current?.click()}
      style={{ cursor: 'pointer' }}
    >
      <input 
        type="file" 
        accept="image/*" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: 'none' }} 
      />
      <Upload size={18} color="var(--text-muted)" />
      <div className="upload-text-group">
        <span className="upload-text">Upload logo</span>
        <span className="upload-subtext">JPG, PNG up to 2MB</span>
      </div>
    </div>
  );
}

export default ImageUploader;
