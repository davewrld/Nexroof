from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

users =[]
products = [
    {'id': 1, 'name': 'Classic Roof', 'description': 'Durable classic roofing material.', 'price': 199.99},
    {'id': 2, 'name': 'Shingle Roof', 'description': 'Affordable and versatile shingle roofing.', 'price': 149.99},
    {'id': 3, 'name': 'Milano Roof', 'description': 'Stylish Milano roofing tiles.', 'price': 299.99},
    {'id': 4, 'name': 'Roman Roof', 'description': 'Elegant Roman roofing solution.', 'price': 399.99},
]
cart = {}
orders = []

# Get all products
@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

# Get product by id
@app.route('/api/products/<int:id>', methods=['GET'])
def get_product(id):
    product = next((p for p in products if p['id'] == id), None)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

if __name__ == "___main__":
    app.run(host='0.0.0.0', port=5000, debug=True) 