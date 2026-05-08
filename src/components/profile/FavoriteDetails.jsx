import { useState } from 'react';
import { Trash2, Bell } from 'lucide-react';
import { DrugCard } from '@/components/drugs/DrugCard';
import { BloodBankCard } from '@/components/bloodbank/BloodBankCard';
import { Card } from '../ui/card';

export default function FavouriteDetails() {
  const [favourites, setFavourites] = useState([
    {
      id: 1,
      type: 'blood-bank',
      title: 'A+ and A-',
      description: 'These are products with both Type A and Type B antigens, making them unique. AB+ recipients can use all, while...',
      price: 5000,
      points: 12,
      icon: '/blooddrop.svg',
    },
    {
      id: 2,
      type: 'drug',
      title: 'Ampicilyn 450 MG',
      description: 'Measures the levels of substances in your blood...',
      price: 5000,
      points: 12,
      image: '/meds.png'
    },
    {
      id: 3,
      type: 'blood-bank',
      title: 'A+ and A-',
      description: 'These are products with both Type A and Type B antigens, making them unique. AB+ recipients can use all, while...',
      price: 5000,
      points: 12,
      icon: '/blooddrop.svg'
    },
    {
      id: 4,
      type: 'drug',
      title: 'Ampicilyn 450 MG',
      description: 'Measures the levels of substances in your blood...',
      price: 5000,
      points: 12,
      image: '/meds.png'
    },
    {
      id: 5,
      type: 'blood-bank',
      title: 'A+ and A-',
      description: 'These are products with both Type A and Type B antigens, making them unique. AB+ recipients can use all, while...',
      price: 5000,
      points: 12,
      icon: '/blooddrop.svg'
    },
    {
      id: 6,
      type: 'drug',
      title: 'Ampicilyn 450 MG',
      description: 'Measures the levels of substances in your blood...',
      price: 5000,
      points: 12,
      image: '/meds.png'
    }
  ]);

  const handleRemoveFavourite = (id) => {
    setFavourites(favourites.filter(item => item.id !== id));
  };

  const handleAddCart = (item) => {
    // Implement add to cart functionality here
    console.log('Adding to cart:', item);
  }

  if (favourites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <div className="flex items-center justify-center">
          <img src='/bell circle.svg' alt='bell circle' className='' />
        </div>
        
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Nothing yet</h2>
          <p className="text-gray-600">your favorites will appear here once you've added them</p>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Need help? <a href="#" className="text-gray-900 font-semibold hover:underline">Contact support</a>
          </p>
        </div>

        <button className="border-2 border-gray-300 text-gray-900 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
          See active state
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Favourite ({favourites.length} items)
        </h2>
        {favourites.length > 0 && (
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Trash2 size={20} className="text-gray-600" />
          </button>
        )}
      </div>

      {/* Favourite Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {favourites.map((item) => (
          <Card key={item.id} className="relative  peer group border rounded-lg p-2 hover:shadow-sm transition-shadow">
            {item.type === 'drug' ? (
              <DrugCard 
              item={item}
              id={item?.id}
              name={item?.title}
              description={item?.description} 
              imageUrl={item?.image}
              onAddToCart={() => handleAddCart(item)}
              onRemove={() => handleRemoveFavourite(item.id)}
              className={'h-[350px] gap-3'}
              />
            ) : (
              <BloodBankCard
                title={item?.title}
                description={item?.description}
                price={item?.price}
                points={item?.points}
                image={item?.image}
                className={'h-[350px]'}
                onRemove={() => handleRemoveFavourite(item.id)} />
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
