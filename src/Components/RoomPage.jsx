import React, { useState, useEffect } from 'react';

const RoomsPage = () => {
  const [selectedRoom, setSelectedRoom] = useState('deluxe');
  const [selectedMealPlan, setSelectedMealPlan] = useState('room-only');
  const [selectedLunchOrDinner, setSelectedLunchOrDinner] = useState('lunch');
  const [expandedAmenities, setExpandedAmenities] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // ✅ RESPONSIVE WINDOW RESIZE
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth < 1024;

  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      view: 'Mountain View',
      beds: '1 King Bed',
      basePrice: 5999,
      amenities: [
        'Daily Housekeeping', 'Free Wi-Fi', 'Bathroom', 'Air Conditioning',
        'TV', 'Woollen Blanket', 'Room Service', 'Caretaker', 'Power backup', 'Closet'
      ],
    },
    {
      id: 'premium',
      name: 'Premium Room',
      view: 'Mountain View',
      beds: '1 King Bed',
      basePrice: 6999,
      amenities: [
        'Daily Housekeeping', 'Free Wi-Fi', 'Air Conditioning', 'TV',
        'Woollen Blanket', 'Seating Area', 'Charging Points', 'Kettle'
      ],
    },
    {
      id: 'cottage-deluxe',
      name: 'Cottage Deluxe',
      view: 'River View',
      beds: '1 King Bed',
      basePrice: 7999,
      amenities: [
        'Daily Housekeeping', 'Free Wi-Fi', 'Air Conditioning', 'TV',
        'Woollen Blanket', 'In-room Dining', 'Charging Points'
      ],
    },
    {
      id: 'family-suite',
      name: 'Family Suite Room',
      view: 'Mountain View',
      beds: '2 Double Beds',
      basePrice: 8999,
      amenities: [
        'Daily Housekeeping', 'Free Wi-Fi', 'Air Conditioning', 'TV',
        'Woollen Blanket', 'Seating Area', 'Kettle'
      ],
    },
    {
      id: 'cottage-duplex',
      name: 'Cottage Duplex Family Suite',
      view: 'River View',
      beds: '1 King Bed',
      basePrice: 9999,
      amenities: [
        'Daily Housekeeping', 'Free Wi-Fi', 'Air Conditioning', 'TV',
        'Woollen Blanket', 'Seating Area', 'Charging Points', 'Kettle'
      ],
    },
  ];

  const mealPlans = [
    { id: 'room-only', name: 'Room Only', extraPrice: 0, breakfast: false, lunchDinner: false },
    { id: 'breakfast', name: 'Room + Breakfast', extraPrice: 200, breakfast: true, lunchDinner: false },
    { id: 'breakfast-lunch-dinner', name: 'Room + Breakfast + Lunch/Dinner', extraPrice: 500, breakfast: true, lunchDinner: true },
    { id: 'full-board', name: 'Room + All Meals', extraPrice: 800, breakfast: true, lunchDinner: true },
  ];

  const selectedRoomData = rooms.find(room => room.id === selectedRoom) || rooms[0];
  const selectedMealData = mealPlans.find(plan => plan.id === selectedMealPlan) || mealPlans[0];
  const totalPrice = (selectedRoomData?.basePrice || 0) + (selectedMealData?.extraPrice || 0);

  return (
    <div style={styles.pageContainer(isMobile)}>
      <div style={styles.header(isMobile)} className="travel-heading">
        <h1 style={styles.pageTitle(isMobile)}>Our Rooms</h1>
        <p style={styles.pageSubtitle(isMobile)}>Choose your perfect stay with flexible meal options</p>
      </div>

      <div style={styles.mainGrid(isMobile, isTablet)}>
        {/* Rooms Grid */}
        <div style={styles.roomsSection(isMobile)} className="travel-heading">
          <h2 style={styles.sectionTitle(isMobile)}>Select Room Type</h2>
          <div style={styles.roomsGrid(isMobile)}>
            {rooms.map((room) => (
              <div
                key={room.id}
                style={{
                  ...styles.roomCard(isMobile),
                  ...(selectedRoom === room.id ? styles.roomCardSelected(isMobile) : {}),
                }}
                onClick={() => setSelectedRoom(room.id)}
              >
                <div style={styles.roomHeader}>
                  <div style={styles.viewBadge}>{room.view}</div>
                  <div>
                    <h3 style={styles.roomName}>{room.name}</h3>
                    <p style={styles.roomBeds}>{room.beds}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Room Details & Booking */}
        <div style={styles.bookingSection(isMobile)}>
          {/* Selected Room Preview */}
          <div style={styles.previewCard(isMobile)} className="travel-heading">
            <div style={styles.previewHeader}>
              <div style={styles.sparkleBadge}>✨</div>
              <div>
                <h2 style={styles.previewTitle}>{selectedRoomData.name}</h2>
                <p style={styles.previewView}>{selectedRoomData.view} • {selectedRoomData.beds}</p>
              </div>
            </div>
            
            <div style={styles.amenitiesPreview}>
              <h4 style={styles.previewAmenitiesTitle}>Key Amenities</h4>
              <div style={styles.amenitiesList}>
                {selectedRoomData.amenities.slice(0, 6).map((amenity, i) => (
                  <div key={i} style={styles.amenityPreview}>
                    <span style={styles.amenityBullet}>•</span>
                    <span>{amenity}</span>
                  </div>
                ))}
                {selectedRoomData.amenities.length > 6 && (
                  <>
                    {!expandedAmenities && (
                      <div 
                        style={styles.expandAmenities}
                        onClick={() => setExpandedAmenities(true)}
                      >
                        +{selectedRoomData.amenities.length - 6} more
                      </div>
                    )}
                    {expandedAmenities && (
                      <>
                        {selectedRoomData.amenities.slice(6).map((amenity, i) => (
                          <div key={`extra-${i}`} style={styles.amenityPreview}>
                            <span style={styles.amenityBullet}>•</span>
                            <span>{amenity}</span>
                          </div>
                        ))}
                        <div 
                          style={styles.collapseAmenities}
                          onClick={() => setExpandedAmenities(false)}
                        >
                          Show Less
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Meal Plan Selector */}
          <div style={styles.mealSelector(isMobile)} className="travel-heading">
            <h3 style={styles.sectionTitle(isMobile)}>Choose Meal Plan</h3>
            <p style={styles.nonRefundable}>All bookings are <strong>Non-Refundable</strong></p>
            
            <div style={styles.mealPlansGrid}>
              {mealPlans.map((plan) => (
                <div
                  key={plan.id}
                  style={{
                    ...styles.mealCard(isMobile),
                    ...(selectedMealPlan === plan.id ? styles.mealCardSelected(isMobile) : {}),
                  }}
                  onClick={() => setSelectedMealPlan(plan.id)}
                >
                  <div style={styles.mealContent}>
                    <h4>{plan.name}</h4>
                    <div style={styles.mealPrice}>+₹{(plan.extraPrice || 0).toLocaleString()}</div>
                    <div style={styles.mealStatus}>
                      {plan.breakfast && <span style={styles.included}>✓ Breakfast</span>}
                      {plan.lunchDinner && (
                        <span style={styles.included}>
                          ✓ {selectedLunchOrDinner === 'lunch' ? 'Lunch' : 'Dinner'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedMealPlan === 'breakfast-lunch-dinner' && (
              <div style={styles.lunchDinnerToggle}>
                <button
                  style={{
                    ...styles.toggleBtn,
                    ...(selectedLunchOrDinner === 'lunch' ? styles.toggleBtnActive : {}),
                  }}
                  onClick={() => setSelectedLunchOrDinner('lunch')}
                >
                  Lunch
                </button>
                <button
                  style={{
                    ...styles.toggleBtn,
                    ...(selectedLunchOrDinner === 'dinner' ? styles.toggleBtnActive : {}),
                  }}
                  onClick={() => setSelectedLunchOrDinner('dinner')}
                >
                  Dinner
                </button>
              </div>
            )}

            {/* Total & Book */}
            <div style={styles.totalSection(isMobile)} className="travel-heading">
              <button 
                style={styles.bookBtn(isMobile)}
                onClick={() => {
                  console.log(`Booking: ${selectedRoomData.name} + ${selectedMealData.name} = ₹${totalPrice}`);
                }}
              >
                Book Now - Non Refundable
              </button>
              <p style={styles.mealNote}>Meals: North Indian & South Indian • Veg/Non-Veg • Freshly prepared</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: (isMobile) => ({
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    padding: isMobile ? '6rem 1rem' : '8rem 2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  }),
  header: (isMobile) => ({
    textAlign: 'center',
    marginBottom: isMobile ? '2.5rem' : '4rem',
  }),
  pageTitle: (isMobile) => ({
    fontSize: isMobile ? '2.5rem' : '3.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #2e3a21, #4ade80)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: 0,
    marginBottom: '1rem',
    lineHeight: isMobile ? 1.2 : 1.1,
  }),
  pageSubtitle: (isMobile) => ({
    fontSize: isMobile ? '1.25rem' : '1.5rem',
    color: '#64748b',
    margin: 0,
  }),
  mainGrid: (isMobile, isTablet) => ({
    maxWidth: '1400px',
    margin: '0 auto',
    display: isMobile ? 'block' : 'grid',
    gridTemplateColumns: isTablet ? '1fr' : '1fr 500px',
    gap: isMobile ? '2rem' : '3rem',
  }),
  roomsSection: (isMobile) => ({
    background: 'white',
    borderRadius: isMobile ? '1.5rem' : '2rem',
    padding: isMobile ? '2rem 1.5rem' : '2.5rem',
    boxShadow: '0 25px 60px rgba(0,0,0,0.1)',
  }),
  sectionTitle: (isMobile) => ({
    fontSize: isMobile ? '1.75rem' : '2rem',
    fontWeight: 'bold',
    color: '#2e3a21',
    marginBottom: isMobile ? '1.5rem' : '2rem',
    textAlign: isMobile ? 'center' : 'left',
  }),
  roomsGrid: (isMobile) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: isMobile ? '1rem' : '1.5rem',
  }),
  roomCard: (isMobile) => ({
    padding: isMobile ? '1.5rem 1.25rem' : '2rem',
    border: '2px solid #e2e8f0',
    borderRadius: isMobile ? '1.25rem' : '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: 'white',
  }),
  roomCardSelected: (isMobile) => ({
    borderColor: '#2e3a21',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    boxShadow: '0 20px 40px rgba(100,115,40,0.65)',
    transform: 'translateY(-5px)',
  }),
  roomHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  viewBadge: {
    background: '#dcfce7',
    color: '#2e3a21',
    padding: '0.4rem 0.6rem',
    borderRadius: '0.75rem',
    fontSize: '0.8rem',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  roomName: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#2e3a21',
    margin: 0,
    lineHeight: 1.2,
  },
  roomBeds: {
    color: '#475569',
    fontSize: '0.9rem',
    margin: '0.25rem 0 0 0',
  },
  bookingSection: (isMobile) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'column',
    gap: isMobile ? '1.5rem' : '2rem',
  }),
  previewCard: (isMobile) => ({
    background: 'white',
    borderRadius: isMobile ? '1.25rem' : '1.5rem',
    padding: isMobile ? '1.5rem' : '2rem',
    boxShadow: '0 20px 40px rgba(100,115,40,0.55)',
  }),
  previewHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.25rem',
  },
  sparkleBadge: {
    fontSize: '1.4rem',
    background: '#dcfce7',
    color: '#2e3a21',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  previewTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#2e3a21',
    margin: 0,
  },
  previewView: {
    color: '#64748b',
    fontSize: '0.95rem',
    margin: '0.25rem 0 0 0',
  },
  amenitiesPreview: {
    marginTop: '1rem',
  },
  previewAmenitiesTitle: {
    color: '#2e3a21',
    marginBottom: '1rem',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  amenitiesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  amenityPreview: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.4rem',
    background: '#f8fafc',
    borderRadius: '0.6rem',
    fontSize: '0.9rem',
  },
  amenityBullet: {
    color: '#2e3a21',
    fontWeight: 'bold',
    minWidth: '1rem',
  },
  expandAmenities: {
    color: 'rgba(100,115,40,0.8)',
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
    padding: '0.6rem',
    background: 'rgba(100,115,40,0.08)',
    borderRadius: '0.6rem',
    border: '2px dashed rgba(100,115,40,0.3)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    marginTop: '0.5rem',
  },
  collapseAmenities: {
    color: 'rgba(100,115,40,0.8)',
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
    padding: '0.6rem',
    background: 'rgba(100,115,40,0.08)',
    borderRadius: '0.6rem',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    marginTop: '0.5rem',
  },
  mealSelector: (isMobile) => ({
    background: 'white',
    borderRadius: isMobile ? '1.25rem' : '1.5rem',
    padding: isMobile ? '2rem 1.5rem' : '2.5rem',
    boxShadow: '0 20px 40px rgba(100,115,40,0.55)',
  }),
  nonRefundable: {
    color: '#dc2626',
    fontSize: '0.9rem',
    marginBottom: '1.25rem',
    textAlign: 'center',
  },
  mealPlansGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  mealCard: (isMobile) => ({
    padding: isMobile ? '1.25rem 1rem' : '1.5rem',
    border: '2px solid #e2e8f0',
    borderRadius: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }),
  mealCardSelected: (isMobile) => ({
    borderColor: '#2e3a21',
    background: '#f0fdf4',
    boxShadow: '0 10px 25px rgba(100,115,40,0.65)',
  }),
  mealContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  mealPrice: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#059669',
  },
  mealStatus: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },
  included: {
    color: '#059669',
    fontWeight: '500',
    fontSize: '0.9rem',
  },
  lunchDinnerToggle: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  toggleBtn: {
    flex: 1,
    padding: '0.65rem',
    border: '2px solid #e2e8f0',
    background: 'white',
    borderRadius: '0.65rem',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    fontSize: '0.95rem',
  },
  toggleBtnActive: {
    borderColor: '#2e3a21',
    background: '#2e3a21',
    color: 'white',
  },
  totalSection: (isMobile) => ({
    borderTop: '2px solid #f1f5f9',
    paddingTop: isMobile ? '1.5rem' : '2rem',
    textAlign: isMobile ? 'center' : 'left',
  }),
  bookBtn: (isMobile) => ({
    width: '100%',
    padding: isMobile ? '1rem 1.25rem' : '1.25rem',
    background: 'linear-gradient(135deg, #2e3a21 0%, #1e2715 100%)',
    color: 'white',
    border: 'none',
    borderRadius: isMobile ? '0.875rem' : '1rem',
    fontSize: isMobile ? '1.1rem' : '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 30px rgba(100,115,40,0.55)',
    marginBottom: '1rem',
  }),
  mealNote: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '0.85rem',
    marginTop: '0.5rem',
  },
};

export default RoomsPage;
