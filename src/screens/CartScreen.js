import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

const cartItemsData = [
  {
    id: '1',
    name: 'Classic Hot Coffee',
    price: 150,
    quantity: 1,
    type: 'veg',
    image: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740',
  },
  {
    id: '2',
    name: 'Paneer Tikka Wrap',
    price: 180,
    quantity: 2,
    type: 'veg',
    image: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740',
  },
];

const suggestionsData = [
  {
    id: 's1',
    name: 'Masala Potato Puff',
    price: 160,
    image: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740',
  },
  {
    id: 's2',
    name: 'Lebanese Sandwich',
    price: 265,
    image: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740',
  },
  {
    id: 's3',
    name: 'Double Choco Brownie',
    price: 235,
    image: 'https://img.freepik.com/free-psd/top-view-delicious-pizza_23-2151868956.jpg?t=st=1742108540~exp=1742112140~hmac=6b1d718cf9aa131c5d7532ff14ae50539db74da00f51398ad2304f9c43d3bd22&w=740',
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(cartItemsData);
  const [address, setAddress] = useState('');

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <View style={styles.itemHeader}>
          <View
            style={[
              styles.vegNonVeg,
              { borderColor: item.type === 'veg' ? 'green' : 'red' },
            ]}
          >
            <View
              style={[
                styles.vegDot,
                { backgroundColor: item.type === 'veg' ? 'green' : 'red' },
              ]}
            />
          </View>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => decreaseQty(item.id)}
          >
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyCount}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => increaseQty(item.id)}
          >
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemTotal}>₹{item.price * item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/* Cart Items */}
        <View style={styles.section}>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* Cooking requests & Add more */}
        <View style={styles.cookingRequest}>
          <Text style={styles.note}>📝 Cooking requests</Text>
          <TouchableOpacity>
            <Text style={styles.link}>+ Add more items</Text>
          </TouchableOpacity>
        </View>

        {/* Complete Your Meal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Complete your meal</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {suggestionsData.map((item) => (
              <View key={item.id} style={styles.suggestionItem}>
                <Image source={{ uri: item.image }} style={styles.suggestionImg} />
                <Text style={styles.suggestionName}>{item.name}</Text>
                <Text style={styles.suggestionPrice}>₹{item.price}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Delivery Location Section (moved here) */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Location</Text>
          <TextInput
            style={styles.addressInput}
            placeholder="Enter your delivery address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Coupon */}
        <TouchableOpacity style={styles.section}>
          <Text style={styles.sectionTitle}>Apply Coupon</Text>
        </TouchableOpacity>

        {/* Delivery Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Type</Text>
          <Text style={styles.subText}>🚚 Standard • 35–40 mins</Text>
        </View>

        {/* Tip */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tip</Text>
          <Text style={styles.subText}>
            Show appreciation to your delivery partner
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Pay Bar */}
      <View style={styles.footer}>
        <Text style={styles.totalAmount}>₹{getTotal()}</Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payText}>Pay ₹{getTotal()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { flex: 1 },
  section: { padding: 16, borderBottomWidth: 1, borderColor: '#f0f0f0' },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
  subText: { color: '#666', fontSize: 14 },
  addressInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    fontSize: 14,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: { width: 80, height: 80, borderRadius: 8, marginRight: 10 },
  itemInfo: { flex: 1 },
  itemHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  itemName: { fontSize: 16, fontWeight: '600' },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    width: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  qtyBtn: { paddingHorizontal: 6 },
  qtyText: { fontSize: 18, fontWeight: '600' },
  qtyCount: { fontSize: 16 },
  itemTotal: { fontSize: 16, fontWeight: '600', color: '#444' },
  vegNonVeg: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  vegDot: { width: 8, height: 8, borderRadius: 4 },
  cookingRequest: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  note: { fontSize: 14 },
  link: { fontSize: 14, color: '#00b386', fontWeight: '600' },
  suggestionItem: {
    width: 120,
    marginRight: 12,
    alignItems: 'center',
  },
  suggestionImg: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 6,
  },
  suggestionName: { fontSize: 13, textAlign: 'center' },
  suggestionPrice: { fontSize: 13, fontWeight: '600' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  totalAmount: { fontSize: 18, fontWeight: '600' },
  payButton: {
    backgroundColor: '#00b386',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  payText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});

export default CartScreen;
