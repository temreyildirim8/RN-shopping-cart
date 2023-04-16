import React, {useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {products} from '../../constants/products';
import {StackNavigationProp} from '@react-navigation/stack';
import {Product, RootStackParamList} from '../../types';

type ProductsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProductsScreenNavigationProp;
};

const Products: React.FC<Props> = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [cartItems, setCartItems] = useState<Product[]>([]);

  const asyncStorage = useAsyncStorage('userToken');

  const handleSearch = () => {
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  const handleLogout = () => {
    asyncStorage
      .removeItem()
      .then(() => console.log('removed'))
      .catch(error => console.log(error));
  };

  const handleAddToCart = (product: any) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
  };

  const handleGoToCart = () => {
    navigation.replace('Cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoToCart()}>
          <Text style={styles.title}>Cart</Text>
          {cartItems && cartItems.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={styles.title}>Ürün Listesi</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
          <Text style={styles.logoutText}>Çıkış</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Arama Yap"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Ara</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.productItem}
            onPress={() => handleAddToCart(item)}>
            <Image source={{uri: item.img}} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.title}</Text>
              <Text style={styles.productIngredients}>{item.ingredients}</Text>
              <Text style={styles.productPrice}>{item.price} TL</Text>
            </View>
            <Text style={styles.title}>Add</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    height: 50,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
  },
  cartBadgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  searchButton: {
    width: 70,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productIngredients: {
    fontSize: 14,
    color: '#888',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Products;
